---
tag: D8BT8DXJJZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123610
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 25th question, let the set of all prime numbers be denoted as $P$, for a given positive integer $n \geq 3$, prove:
(1) $\sum_{\substack{\mathrm{p} \leq \mathrm{n} \\ \mathrm{p} \in \mathrm{P}}} \frac{1}{\mathrm{p}} \geq \ln \ln \mathrm{n} + \mathrm{O}(1)$;
(2) For any positive integer $k$, $\sum_{\mathrm{p} \leq \mathrm{n} \\ \mathrm{p} \in \mathrm{P}} \frac{1}{\mathrm{p}} \leq (\mathrm{k}! \cdot \mathrm{k} \cdot \ln \mathrm{n})^{\frac{1}{k}}$
