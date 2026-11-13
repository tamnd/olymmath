---
tag: A20RXWV8C4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259511
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be relatively prime positive integers, $b$ even. For each positive integer $q$, let $p=p(q)$ be chosen so that
$$ \left| \frac{p}{q} - \frac{a}{b} \right|$$
is a minimum. Prove that
$$ \lim_{n \to \infty} \sum_{q=1 }^{n} \frac{ q\left| \frac{p}{q} - \frac{a}{b} \right|}{n} = \frac{1}{4}.$$
