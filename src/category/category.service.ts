import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepos: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepos.findOne({
      where: { name: createCategoryDto.name },
    });
    if (category) throw new BadRequestException('Category name already exists');
    const newCategory = this.categoryRepos.create(createCategoryDto);
    return this.categoryRepos.save(newCategory);
  }

  findAll() {
    return this.categoryRepos.find();
  }

  findOne(id: number) {
    return this.categoryRepos.findOne({ where: { id: id } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
