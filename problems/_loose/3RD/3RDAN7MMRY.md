---
tag: 3RDAN7MMRY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider $5 \times 5$ tables containing a real number in each of the $25$ cells. The same number may occur in different cells, but no row or column contains five equal numbers. Such a table is *balanced * if the number in the middle cell of every row and column is the average of the numbers in that row or column. A cell is called *small * if the number in that cell is strictly smaller than the number in the cell in the very middle of the table. What is the least number of small cells that a balanced table can have?
