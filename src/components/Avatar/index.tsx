import styles from './styles.module.css';

interface AvatarProps {
  avatarUrl: string;
  hasBorder?: boolean;
}

export function Avatar({ avatarUrl, hasBorder = true }: AvatarProps) {
  return (
    <img 
      src={avatarUrl} 
      className={ hasBorder ? styles.containerWithBorder : styles.container }
    />
  );
}