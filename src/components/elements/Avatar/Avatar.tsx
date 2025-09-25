import { UserIcon } from '@heroicons/react/20/solid'

interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Avatar: React.FC<AvatarProps> = ({ size }) => {
  const styleIt = () => {
    return 'rounded-full bg-primary-100 border border-primary-200 overflow-hidden'
  }

  const sizeIt = () => {
    switch (size) {
      case 'xs':
        return 'w-6 h-6 p-1'
      case 'sm':
        return 'w-8 h-8 p-1'
      case 'md':
        return 'w-10 h-10 p-1'
      case 'lg':
        return 'w-12 h-12 p-1'
      case 'xl':
        return 'w-14 w-14 p-1'
    }
  }

  return (
    <div className={`${styleIt()} ${sizeIt()}`}>
      <UserIcon className={'fill-primary-300'} />
    </div>
  )
}

export default Avatar
