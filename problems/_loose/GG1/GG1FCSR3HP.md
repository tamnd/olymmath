---
tag: GG1FCSR3HP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h587750
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11312
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2014
    source: hf-ai-mo-aops
    label: 2014 Iran MO (2nd Round)
---
A basket is called "*Stuff Basket*" if it includes $10$ kilograms of rice and $30$ number of eggs. A market is to distribute $100$ Stuff Baskets. We know that there is totally $1000$ kilograms of rice and $3000$ number of eggs in the baskets, but some of market's baskets include either more or less amount of rice or eggs. In each step, market workers can select two baskets and move an arbitrary amount of rice or eggs between selected baskets. Starting from an arbitrary situation, what's the minimum number of steps that workers provide $100$ Stuff Baskets?
