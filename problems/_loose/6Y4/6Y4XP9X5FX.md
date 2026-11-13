---
tag: 6Y4XP9X5FX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h2526704
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48233
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Moldova National Olympiad
---
Prove that if a positive integer $n$ divides the five-digit numbers $\overline{a_1a_2a_3a_4a_5}$ , $\overline{b_1b_2b_3b_4b_5}$ , $\overline{c_1c_2c_3c_4c_5}$ , $\overline{d_1d_2d_3d_4d_5}$ , $\overline{e_1e_2e_3e_4e_5}$ , then it also divides the determinant $$ D=\begin{vmatrix}a_1&a_2&a_3&a_4&a_5b_1&b_2&b_3&b_4&b_5c_1&c_2&c_3&c_4&c_5d_1&d_2&d_3&d_4&d_5e_1&e_2&e_3&e_4&e_5\end{vmatrix}. $$
