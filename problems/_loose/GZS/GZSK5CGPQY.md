---
tag: GZSK5CGPQY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a $20 \times 101$ square table with $20$ rows and $101$ columns. One wants to fill numbers $0$ and $1$ in the unit squares of the table satisfying the following conditions:
$[\text{i}]$ Each square has exactly one number to be filled in.
$[\text{ii}]$ Each column is filled with exactly two $1'$s.
$[\text{iii}]$ Any two rows with no more than one column are filled with two $1'$s.

$a.$ How many ways to fill the numbers satisfying the given conditions?

$b.$ With a satisfied numbering way, we number the rows in order from top to bottom. A triple of row (distinct, unordered) $\{a; b; c\}$ is said to be *united* if the sets of numbers in the three rows are $(a_1, a_2, . . . , a_{101}), (b_1, b_2, . . . . , b_{101}),$ and $(c_1, c_2, . . . . , c_{101})$ satisfied$$\sum\limits_{i = 1}^{101} {({a_i}{b_i} + {b_i}{c_i} + {c_i}{a_i})} = 3.$$
Prove that: there are at least $10$ *united* sets.
