---
tag: 4BRTNBNP27
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h5439
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39981
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2004
    source: hf-ai-mo-aops
    label: 2004 Germany Team Selection Test
---
Find all functions $f: \Bbb{R}_{0}^{+}\rightarrow \Bbb{R}_{0}^{+}$ with the following properties:

(a) We have $f\left( xf\left( y\right) \right) \cdot f\left( y\right) =f\left( x+y\right)$ for all $x$ and $y$ .
(b) We have $f\left(2\right) = 0$ .
(c) For every $x$ with $0 < x < 2$ , the value $f\left(x\right)$ doesn't equal $0$ .**NOTE.** We denote by $\Bbb{R}_{0}^{+}$ the set of all non-negative real numbers.
