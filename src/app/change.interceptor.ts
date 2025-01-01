import { HttpInterceptorFn } from '@angular/common/http';

export const changeInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
