import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage(): JSX.Element {
  const authToken = cookies().get('authToken');
  
  if (authToken) {
    redirect('/');
  }

  
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
          <div className="mt-10 flex items-center justify-center max-w-lg mx-auto">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}