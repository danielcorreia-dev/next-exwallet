import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TableCell, TableRow } from "@/components/ui/table";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const DashboardContent = () => {
    const invoices = [
        {
            nameOfTransaction: "Parcela do Carro",
            totalAmount: "R$250.00",
            paymentMethod: "Crédito",
            id: "1"
        },
        {
            nameOfTransaction: "Compras do mês",
            totalAmount: "R$2250.00",
            paymentMethod: "Crédito",
            id: "2"
        },
        {
            nameOfTransaction: "Petshop",
            totalAmount: "R$50.00",
            paymentMethod: "Débito",
            id: "3"
        },
    ];

    return (
        <div className="container">
            <div className="flex justify-between">
                <h1 className="text-2xl md:text-2xl mb-3 mt-10 md:mb-0">Dashboard</h1>
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button className='mb-3 mt-10 md:mb-0'>Nova Transação</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>Nova Transação</DrawerTitle>
                                <DrawerDescription className='mb-6'>Adicione uma nova transação</DrawerDescription>
                            </DrawerHeader>
                            <Label>
                                Nome da trasação
                            </Label>
                            <Input placeholder='Petshop' className='my-5' />
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Tipo da transação" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Crédito">Crédito</SelectItem>
                                    <SelectItem value="Débito">Débito</SelectItem>
                                </SelectContent>
                            </Select>
                            <br />
                            <Label>
                                Valor gasto
                            </Label>
                            <Input type='number' className='my-5' placeholder='R$ 45,00' />
                            <DrawerFooter>
                                <Button>Enviar</Button>
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancelar</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
            <div className="flex flex-col md:flex-row md:gap-5 justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                    <Card className="w-full mt-5 py-4 px-8">
                        <CardHeader>
                            <CardDescription className="py-3 text-lg md:text-xl">Débito Disponível</CardDescription>
                            <CardTitle className="text-xl md:text-2xl font-bold">R$392,00</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className="w-full mt-5 py-4 px-8">
                        <CardHeader>
                            <CardDescription className="py-3 text-lg md:text-xl">Crédito Disponível</CardDescription>
                            <CardTitle className="text-xl md:text-2xl font-bold">R$200,00</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className="w-full mt-5 py-4 px-8">
                        <CardHeader>
                            <CardDescription className="py-3 text-lg md:text-xl">Saldo Disponível</CardDescription>
                            <CardTitle className="text-xl md:text-2xl font-bold">R$592,00</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            </div>
            <h1 className="text-2xl md:text-2xl mt-10 py-10 md:mb-0">
                Últimas Transações
            </h1>
            <table className="m-auto flex flex-col justify-center container align-middle">
                <tbody className='m-auto'>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                            <TableCell className="w-[400px] font-medium">{invoice.nameOfTransaction}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardContent;

