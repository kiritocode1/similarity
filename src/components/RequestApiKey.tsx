'use client'


import { FC, FormEvent, useState } from 'react'
import { toast } from '@/ui/toast';
import { createApikey as cKey } from '@/helpers/create-api-key';
import { Key } from 'lucide-react';
import LargeHeading from '@/ui/LargeHeading';
import Paragraph from '@/ui/paragraph';
import CopyButton from '@/components/CopyButton';
import { Input } from '@/ui/Input';
import Button from '@/ui/Button';


const RequestApiKey: FC = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null); 

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsCreating(true); 
    try {
      const generatedApiKey = await cKey(); 
      setApiKey(generatedApiKey);
    } catch (error) {
      if (error instanceof Error) { 
        toast({
          message: error.message,
          type: 'error'
        }); 

      }
      toast({
        message: "Something went wrong", 
        type: 'error'
        , title: "Error"
      })
      
    } finally { 
      setIsCreating(false)

    }
    
  }


  return (
		<div className="container m-w-2xl ">
			<div className="flex flex-col gap-6 items-center ">
				<Key className="mx-auto h-12 w-12 text-gray-400" />
				<LargeHeading>Request the Api Key</LargeHeading>
				<Paragraph>You haven&apos;t requested an API key ... yet.</Paragraph>
			</div>
			<form
				onSubmit={createNewApiKey}
				className="
      mt-6 sm:flex sm:items-center"
				action="#">
				<div className="relative rounded-md shadow-md sm:min-w-0 sm:flex-1">
					{apiKey ? (
						<CopyButton
							valueToCopy={apiKey}
							type="button"
							className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
						/>
					) : null}
					<Input
						readOnly
						value={apiKey ?? ""}
						placeholder="Request an API key to display here "
					/>
        </div>
        <div className='mt-4 sm:ml-4 sm:flex-shrink-0 flex justify-center'>
          <Button disabled={!!apiKey} isLoading={ isCreating}>Request Api Key </Button>
        </div>
			</form>
		</div>
	);
}

export default RequestApiKey