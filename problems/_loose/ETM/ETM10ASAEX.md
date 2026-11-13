---
tag: ETM10ASAEX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143696
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Container $A$ contains 6 liters of saltwater with a concentration of $a \%$, and container $B$ contains 4 liters of saltwater with a concentration of $b \%$. After pouring 1 liter of solution from $A$ into $B$ and mixing, then pouring 1 liter of solution from $B$ back into $A$, this process is repeated $k$ times (pouring from $A$ to $B$, then from $B$ to $A$ counts as one repetition). After $k$ repetitions, the concentrations of the saltwater in $A$ and $B$ are $a_{k} \%$ and $b_{k} \%$ respectively.
（1）Find the sequence formed by $b_{k}-a_{k}$;
（2）Find $a_{k}$ and $b_{k}$.
