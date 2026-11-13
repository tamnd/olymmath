---
tag: AMXCNPR689
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620289
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16810
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218450
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
Let $S$ be the set of all subsets of $\left\{2,3,\ldots,2016\right\}$ with size $1007$ , and for a nonempty set $T$ of numbers, let $f(T)$ be the product of the elements in $T$ . Determine the remainder when $$ \sum_{T\in S}\left(f(T)-f(T)^{-1}\right)^2$$ is divided by $2017$ . Note: For $b$ relatively prime to $2017$ , we say that $b^{-1}$ is the unique positive integer less than $2017$ for which $2017$ divides $bb^{-1} -1$ .

*Proposed by Tristan Shin*
