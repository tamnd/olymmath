---
tag: YGBGN7K9GA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055655
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19270
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220813
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Let $\mathcal{S}$ denote the set of positive integer sequences (with at least two terms) whose terms sum to $2019$ . For a sequence of positive integers $a_1, a_2, \dots, a_k$ , its \emph{value} is defined to be
$$V(a_1, a_2, \dots, a_k) = \frac{a_1^{a_2} a_2^{a_3} \cdots a_{k-1}^{a_k}}{a_1! a_2! \cdots a_k!}.$$
Then the sum of the values over all sequences in $\mathcal{S}$ is $\frac{m}{n}$ where $m$ and $n$ are relatively prime positive integers. Compute the remainder when $m+n$ is divided by $1000$ .

*Proposed by Sean Li*
