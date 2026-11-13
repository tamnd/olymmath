---
tag: B7XAQZ7FWT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471764
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70621
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261908
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
You are initially given the number $n=1$ . Each turn, you may choose any positive divisor $d\mid n$ , and multiply $n$ by $d+1$ . For instance, on the first turn, you must select $d=1$ , giving $n=1\cdot(1+1)=2$ as your new value of $n$ . On the next turn, you can select either $d=1$ or $2$ , giving $n=2\cdot(1+1)=4$ or $n=2\cdot(2+1)=6$ , respectively, and so on.

Find an algorithm that, in at most $k$ steps, results in $n$ being divisible by the number $2021^{2021^{2021}} - 1$ .

An algorithm that completes in at most $k$ steps will be awarded:

1 pt for $k>2021^{2021^{2021}}$ 20 pts for $k=2021^{2021^{2021}}$ 50 pts for $k=10^{10^4}$ 75 pts for $k=10^{10}$ 90 pts for $k=10^5$ 95 pts for $k=6\cdot10^4$ 100 pts for $k=5\cdot10^4$
