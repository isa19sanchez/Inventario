import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    }
  }

  return false;
};