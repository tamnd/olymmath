---
tag: BT7TE4T6EH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1347233
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15818
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2017
    source: hf-ai-mo-aops
    label: 2017 NIMO Problems
---
Eve randomly chooses two $\textbf{distinct}$ points on the coordinate plane from the set of all $11^2$ lattice points $(x, y)$ with $0 \le x \le 10$ , $0 \le y \le 10$ . Then, Anne the ant walks from the point $(0,0)$ to the point $(10, 10)$ using a sequence of one-unit right steps and one-unit up steps. Let $P$ be the number of paths Anne could take that pass through both of the points that Eve chose. The expected value of $P$ is $\dbinom{20}{10} \cdot \dfrac{a}{b}$ for relatively prime positive integers $a$ and $b$ . Compute $100a+b$ .

*Proposed by Michael Tang*
