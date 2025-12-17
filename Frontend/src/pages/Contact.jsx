import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

export default function Contact() {
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

	const onSubmit = async (data) => {
		try {
			const res = await axios.post(`${import.meta.env.VITE_APP}/api/contact`, data);
			if (res.status === 201) {
				toast.success('Message sent — we will get back to you soon!');
				reset();
			} else {
				toast.error('Failed to send message');
			}
		} catch (err) {
			console.error('Contact submit error', err);
			toast.error(err.response?.data?.message || 'Network error');
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-2 py-4">
			<Toaster />
			<div className="max-w-5xl w-full text-center mb-4">
				<h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900">Contact 
                    <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text"> Us</span>
                </h1>
				<p className="mt-2 mb-4 text-gray-600">Have questions or feedback? Reach out and we'll respond within 48 hours.</p>
			</div>

			<div className="max-w-6xl mb-4  w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
				{/* Image / visual */}
				<div className="bg-white rounded-2xl shadow-md overflow-hidden h-[420px]">
					<img
						src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_hybrid&w=740&q=80"
						alt="contact"
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Form */}
				<div className="bg-white rounded-2xl shadow-md p-8 h-[420px] flex flex-col overflow-auto">
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-1">
						<div>
							<label className="block text-sm font-medium text-gray-700">Full Name</label>
							<input
								{...register('fullName', { required: 'Full name is required' })}
								className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
								placeholder="Your full name"
							/>
							{errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName.message}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">Email</label>
							<input
								{...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
								className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
								placeholder="you@example.com"
							/>
							{errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">Message</label>
							<textarea
								{...register('message', { required: 'Message is required' })}
								className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 min-h-[88px] focus:outline-none focus:ring-2 focus:ring-blue-200"
								placeholder="Write your message here"
							/>
							{errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
						</div>

						<div className="flex items-center justify-between gap-4">
							<button
								type="submit"
								disabled={isSubmitting}
								className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow"
							>
								{isSubmitting ? 'Sending...' : 'Contact Us'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
