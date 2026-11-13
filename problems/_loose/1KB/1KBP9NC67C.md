---
tag: 1KBP9NC67C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Kosovo National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h396431
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6717
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: xk-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Kosovo National Mathematical Olympiad
---
Let $n>1$ be an integer and $S_n$ the set of all permutations $\pi : \{1,2,\cdots,n \} \to \{1,2,\cdots,n \}$ where $\pi$ is bijective function. For every permutation $\pi \in S_n$ we define:

$$ F(\pi)= \sum_{k=1}^n |k-\pi(k)| \ \ \text{and} \ \ M_{n}=\frac{1}{n!}\sum_{\pi \in S_n} F(\pi) $$
where $M_n$ is taken with all permutations $\pi \in S_n$ . Calculate the sum $M_n$ .
