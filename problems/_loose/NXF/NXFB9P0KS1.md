---
tag: NXFB9P0KS1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734509
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16865
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
For integers $0 \le m,n \le 2^{2017}-1$ , let $\alpha(m,n)$ be the number of nonnegative integers $k$ for which $\left\lfloor m/2^k \right\rfloor$ and $\left\lfloor n/2^k \right\rfloor$ are both odd integers. Consider a $2^{2017} \times 2^{2017}$ matrix $M$ whose $(i,j)$ th entry (for $1 \le i, j \le 2^{2017}$ ) is $$ (-1)^{\alpha(i-1, j-1)}. $$ For $1 \le i, j \le 2^{2017}$ , let $M_{i,j}$ be the matrix with the same entries as $M$ except for the $(i,j)$ th entry, denoted by $a_{i,j}$ , and such that $\det M_{i,j}=0$ . Suppose that $A$ is the $2^{2017} \times 2^{2017}$ matrix whose $(i,j)$ th entry is $a_{i,j}$ for all $1 \le i, j \le 2^{2017}$ . Compute the remainder when $\det A$ is divided by $2017$ .

*Proposed by Michael Ren and Ashwin Sah*
