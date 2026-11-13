---
tag: 4SYMWG6PMT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Abelkonkurransen Finale
    url: https://artofproblemsolving.com/community/c6h3272829
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1372
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2024
    source: hf-ai-mo-aops
    label: 2024 Abelkonkurransen Finale
---
A $2024$ -*table*is a table with two rows and $2024$ columns containg all the numbers $1,2,\dots,4048$ . Such a table is *evenly coloured* if exactly half of the numbers in each row, and one number in each column, is coloured red. The *red sum* in an evenly coloured $2024$ -table is the sum of all the red numbers in the table.
Let $N$ be the largest number such that every $2024$ -table has an even colouring with red sum $\ge N$ . Determine $N$ , and find the number of $2024$ -tables such that every even colouring of the table has red sum $\le N$ .
