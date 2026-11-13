---
tag: 4YPTN3WWQ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3052520
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1075
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2023
    source: hf-ai-mo-aops
    label: 2023 Romania National Olympiad
---
Let $a,b \in \mathbb{R}$ with $a < b,$ 2 real numbers. We say that $f: [a,b] \rightarrow \mathbb{R}$ has property $(P)$ if there is an integrable function on $[a,b]$ with property that

$$
f(x) - f \left( \frac{x + a}{2} \right) = f \left( \frac{x + b}{2} \right) - f(x) , \forall x \in [a,b].
$$

Show that for all real number $t$ there exist a unique function $f:[a,b] \rightarrow \mathbb{R}$ with property $(P),$ such that $\int_{a}^{b} f(x) \text{dx} = t.$
