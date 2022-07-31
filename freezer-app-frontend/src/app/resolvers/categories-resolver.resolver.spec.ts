import { TestBed } from '@angular/core/testing';

import { CategoriesResolver } from './categories-resolver.service';

describe('CategoriesResolverResolver', () => {
  let resolver: CategoriesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CategoriesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
