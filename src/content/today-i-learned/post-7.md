---
title: 'SQL Error Code: 1217'
publishDate: 'Jan 20 2025'
tags:
  - SQL
  - Backend
isFeatured: true
seo:
  image:
    src: '/post-2.jpg'
    alt: Half open laptop on a desk
---

I ran into _SQL Error Code: 1217. Cannot delete or update a parent row: a foreign key constraint fails_.

To fix this, you have to find what's referencing it:

```sql
SELECT
  TABLE_NAME,
  COLUMN_NAME,
  CONSTRAINT_NAME,
  REFERENCED_TABLE_NAME,
  REFERENCED_COLUMN_NAME
FROM
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
  REFERENCED_TABLE_NAME = 'exampleTableName';
```

Then delete those things first.
