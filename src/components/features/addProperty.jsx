'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function AddPropertyModal({ onSubmit }) {
  const [form, setForm] = useState({
    image: '',
    title: '',
    price: '',
    address: '',
    category: '',
    beds: '',
    baths: '',
    sqft: '',
    status: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit({ ...form, id: Date.now() });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary">+ Add Property</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
        </DialogHeader>

        {/* Wide image picker like GitHub */}
        <div className="w-full mb-4">
          <Input
            placeholder="Paste image URL"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full text-sm"
          />
          {form.image && (
            <img src={form.image} alt="preview" className="mt-2 w-full h-48 object-cover rounded-xl border" />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
          <Input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
          <Input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
          <Input name="category" placeholder="Category (Unit, Flat, etc.)" value={form.category} onChange={handleChange} />
          <Input name="beds" type="number" placeholder="Beds" value={form.beds} onChange={handleChange} />
          <Input name="baths" type="number" placeholder="Baths" value={form.baths} onChange={handleChange} />
          <Input name="sqft" type="number" placeholder="Sqft" value={form.sqft} onChange={handleChange} />
          <Input name="status" placeholder="Status (AVAILABLE, SOLD, etc.)" value={form.status} onChange={handleChange} />
        </div>

        <Textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="mt-4"
        />

        <Button onClick={handleSubmit} className="mt-4 w-full">
          Submit Property
        </Button>
      </DialogContent>
    </Dialog>
  );
}
