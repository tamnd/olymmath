---
tag: XSSP4J6YE3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 USEMO
    url: https://artofproblemsolving.com/community/c6h2707604
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74376
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=157283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: usemo/2021
    source: hf-ai-mo-aops
    label: 2021 USEMO
---
A bagel is a loop of $2a+2b+4$ unit squares which can be obtained by cutting a concentric $a\times b$ hole out of an $(a +2)\times (b+2)$ rectangle, for some positive integers a and b. (The side of length a of the hole is parallel to the side of length $a+2$ of the rectangle.)
Consider an infinite grid of unit square cells. For each even integer $n \ge 8$ , a bakery of order $n$ is a finite set of cells $ S$ such that, for every $n$ -cell bagel $B$ in the grid, there exists a congruent copy of $B$ all of whose cells are in $S$ . (The copy can be translated and rotated.) We denote by $f(n)$ the smallest possible number of cells in a bakery of order $ n$ .
Find a real number $\alpha$ such that, for all sufficiently large even integers $n \ge 8$ , we have $$ \frac{1}{100}<\frac{f (n)}{n^ {\alpha}}<100 $$ *Proposed by Nikolai Beluhov*
