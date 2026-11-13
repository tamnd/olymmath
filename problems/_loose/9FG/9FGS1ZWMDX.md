---
tag: 9FGS1ZWMDX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055667
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19276
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220819
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
Let $c$ be the smallest positive real number such that for all positive integers $n$ and all positive real numbers $x_1$ , $\ldots$ , $x_n$ , the inequality $$ \sum_{k=0}^n \frac{(n^3+k^3-k^2n)^{3/2}}{\sqrt{x_1^2+\dots +x_k^2+x_{k+1}+\dots +x_n}} \leq \sqrt{3}\left(\sum_{i=1}^n \frac{i^3(4n-3i+100)}{x_i}\right)+cn^5+100n^4 $$ holds. Compute $\lfloor 2020c \rfloor$ .

*Proposed by Luke Robitaille*
