---
tag: QVF9XEGZAJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h389202
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6891
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2011
    source: hf-ai-mo-aops
    label: 2011 NIMO Problems
---
Define $f(x)$ to be the nearest integer to $x$ , with the greater integer chosen if two integers are tied for being the nearest. For example, $f(2.3) = 2$ , $f(2.5) = 3$ , and $f(2.7) = 3$ . Define $[A]$ to be the area of region $A$ . Define region $R_n$ , for each positive integer $n$ , to be the region on the Cartesian plane which satisfies the inequality $f(|x|) + f(|y|) < n$ . We pick an arbitrary point $O$ on the perimeter of $R_n$ , and mark every two units around the perimeter with another point. Region $S_{nO}$ is defined by connecting these points in order. **a)** Prove that the perimeter of $R_n$ is always congruent to $4 \pmod{8}$ .**b)** Prove that $[S_{nO}]$ is constant for any $O$ .**c)** Prove that $[R_n] + [S_{nO}] = (2n-1)^2$ .

*Proposed by Lewis Chen*
