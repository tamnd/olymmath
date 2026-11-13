---
tag: MAYZ6PQAXV
kind: problem
type: answer
answer: w_n = \frac{1+i}{4} \cdot 3^n + \frac{3-i}{4} \cdot (-1)^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $(w_n)_{n\ge0}$ by the recurrence relation
$$w_{n+2}=2w_{n+1}+3w_n,\enspace\enspace w_0=1,w_1=i,\enspace n=0,1,\ldots$$
(1) Find the general formula for $w_n$ and compute the first $9$ terms.
(2) Show that $|\Re w_n-\Im w_n|=1$ for all $n\ge1$.

*Proposed by Ovidiu Bagdasar*
