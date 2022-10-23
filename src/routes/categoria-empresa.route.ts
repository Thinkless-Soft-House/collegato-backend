import { Router } from 'express';
import CategoriaEmpresaController from '@controllers/categoria-empresa.controller';

import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { CategoriaEmpresaCreateDTO, CategoriaEmpresaUpdateDTO } from '@/dtos/categoria-empresa.dto';

class CategoriaEmpresaRoute implements Routes {
  public path = '/categoriaEmpresa';
  public router = Router();
  public categoriaEmpresaController = new CategoriaEmpresaController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.categoriaEmpresaController.getCategoriaEmpresa);
    this.router.get(`${this.path}/:id(\\d+)`, this.categoriaEmpresaController.getCategoriaEmpresaById);
    this.router.post(`${this.path}`, validationMiddleware(CategoriaEmpresaCreateDTO, 'body'), this.categoriaEmpresaController.createCategoriaEmpresa);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      validationMiddleware(CategoriaEmpresaUpdateDTO, 'body', true),
      this.categoriaEmpresaController.updateCategoriaEmpresa,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.categoriaEmpresaController.deleteCategoriaEmpresa);
  }
}

export default CategoriaEmpresaRoute;
