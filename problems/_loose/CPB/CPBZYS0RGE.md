---
tag: CPBZYS0RGE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h386601
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54008
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247558
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2001
    source: hf-ai-mo-aops
    label: 2001 Romania National Olympiad
---
Let $f:\mathbb{R}\rightarrow\mathbb{R}$ a continuous function, derivable on $R\backslash\{x_0\}$ , having finite side derivatives in $x_0$ . Show that there exists a derivable function $g:\mathbb{R}\rightarrow\mathbb{R}$ , a linear function $h:\mathbb{R}\rightarrow\mathbb{R}$ and $\alpha\in\{-1,0,1\}$ such that:
$$ f(x)=g(x)+\alpha |h(x)|,\ \forall x\in\mathbb{R} $$
