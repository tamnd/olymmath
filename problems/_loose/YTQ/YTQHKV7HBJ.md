---
tag: YTQHKV7HBJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h587947
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11632
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213589
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2014
    source: hf-ai-mo-aops
    label: 2014 Olympic Revenge
---
Let $a>1$ be a positive integer and $f\in \mathbb{Z}[x]$ with positive leading coefficient. Let $S$ be the set of integers $n$ such that
$$n \mid a^{f(n)}-1.$$
Prove that $S$ has density $0$ ; that is, prove that $\lim_{n\rightarrow \infty} \frac{|S\cap \{1,...,n\}|}{n}=0$ .
