import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const slideUp: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    y: -10, 
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const slideDown: Variants = {
  hidden: { y: -15, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    y: 10, 
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const slideLeft: Variants = {
  hidden: { x: 15, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    x: -10, 
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const slideRight: Variants = {
  hidden: { x: -15, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    x: 10, 
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const scaleIn: Variants = {
  hidden: { scale: 0.98, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeOut' }
  },
  exit: { 
    scale: 0.98, 
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const staggerChildren = (staggerTime = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
    }
  }
});

export const slideFromBottom = (delay = 0): Variants => ({
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.25, 
      ease: 'easeOut',
      delay 
    }
  }
});

export const createDelayedAnimation = (variants: Variants, delay: number): Variants => {
  const newVariants: Variants = { ...variants };
  
  if (newVariants.visible && typeof newVariants.visible !== 'function') {
    newVariants.visible = {
      ...newVariants.visible,
      transition: {
        ...(newVariants.visible.transition || {}),
        delay
      }
    };
  }
  
  return newVariants;
};

export const slideVariants: Variants = {
  initial: { 
    opacity: 0,
    x: '30px'
  },
  animate: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      when: 'beforeChildren',
    }
  },
  exit: { 
    opacity: 0,
    x: '-10px',
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
};
