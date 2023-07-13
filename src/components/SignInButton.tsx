'use client'

import { FC  , useState} from 'react'
import Button from '@/ui/Button';
import { signIn } from 'next-auth/react';
import {toast} from '@/ui/toast';



const SignInButton= () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const signInWithGoogle =async () => {
        setIsLoading(true);
        try {
            await signIn('google')
        } catch (error) {
            toast({
                title: 'error signing in ', 
                message: 'Please try again later...', 
                type : 'error'
            })
        }
    }
    return <Button onClick={signInWithGoogle} isLoading={isLoading}>
        Sign In 
  </Button>
}

export default SignInButton; 