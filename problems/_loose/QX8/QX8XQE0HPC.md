---
tag: QX8XQE0HPC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1575916
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13198
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2015
    source: hf-ai-mo-aops
    label: 2015 South East Mathematical Olympiad
---
Given $8$ pairwise distinct positive integers $a_1,a_2,…,a_8$ such that the greatest common divisor of any three of them is equal to $1$ . Show that there exists positive integer $n\geq 8$ and $n$ pairwise distinct positive integers $m_1,m_2,…,m_n$ with the greatest common divisor of all $n$ numbers equal to $1$ such that for any positive integers $1\leq p<q<r\leq n$ , there exists positive integers $1\leq i<j\leq 8$ that $a_ia_j\mid m_p+m_q+m_r$ .
