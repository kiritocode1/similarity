"use Client"


import { ButtonHTMLAttributes, FC } from 'react'
import { toast } from '@/ui/toast'
import Button from '@/ui/Button'
import { Copy } from 'lucide-react'

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{ 
    valueToCopy :string
}

const CopyButton: FC<CopyButtonProps> = ({
    className,
    valueToCopy,
    ...props
}) => {
    return <Button {...props} onClick={() => {
        navigator.clipboard.writeText(valueToCopy)
        
        toast({
            title: "copied",
            message: 'api key copied to clipboard',
            type: "success"
        })
    }}
        className={className}
    
    >
        <Copy className='h-5 w-5' />
    </Button>
};

export default CopyButton