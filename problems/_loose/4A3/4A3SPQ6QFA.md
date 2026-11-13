---
tag: 4A3SPQ6QFA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_i)_{1\le i\le2015}$ be a sequence consisting of $2015$ integers, and let $(k_i)_{1\le i\le2015}$ be a sequence of $2015$ positive integers (positive integer excludes $0$). Let
$$A=\begin{pmatrix}a_1^{k_1}&a_1^{k_2}&\cdots&a_1^{k_{2015}}\\a_2^{k_1}&a_2^{k_2}&\cdots&a_2^{k_{2015}}\\\vdots&\vdots&\ddots&\vdots\\a_{2015}^{k_1}&a_{2015}^{k_2}&\cdots&a_{2015}^{k_{2015}}\end{pmatrix}.$$Prove that $2015!$ divides $\det A$.
