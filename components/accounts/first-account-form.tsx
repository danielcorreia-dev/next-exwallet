'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { set, useForm } from 'react-hook-form';
import { z } from 'zod';
import useSWRMutation from 'swr/mutation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';
import { redirect, useRouter } from 'next/navigation';

const FirstAccountForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const formSchema = z.object({
    accountName: z.string().min(3, {
      message: 'Account deve ter ao menos 3 caracteres.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountName: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { accountName } = values;

    setLoading(true);
    try {
      const res = await fetch('/api/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accountName }),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: 'Conta criada com sucesso',
          description: 'Agora você pode começar a adicionar transações.',
        });

        router.push(`/app/accounts/${data.id}`);
      }

      if (res.status === 401) {
        redirect('/auth/login');
      }

      if (res.status === 400) {
        form.setError('accountName', {
          type: 'manual',
          message: data.error,
        });
      }

      if (res.status === 404) {
        toast({
          title: 'Erro ao criar conta',
          description: 'Usuário não encontrado.',
        });
      }
    } catch (error) {
      toast({
        title: 'Erro ao criar conta',
        description: 'Tente novamente mais tarde.',
      });
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="accountName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da conta</FormLabel>
              <FormControl>
                <Input placeholder="Startup" {...field} />
              </FormControl>
              <FormDescription>
                A conta é o local onde você irá armazenar suas transações.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit">Criar</Button>
        </div>
      </form>
    </Form>
  );
};

export default FirstAccountForm;
