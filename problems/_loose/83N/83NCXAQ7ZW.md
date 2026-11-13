---
tag: 83NCXAQ7ZW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the function $a^{x^{2}}$ is convex, using the fact that $a^{x}$ and $x^{2}$ are convex functions. We say that a function $h(x)$ is the composition of functions $f(x)$ and $g(x)$ if the values of the function $h$ can be obtained by calculating the values of the function $f$, but not at $x$, rather at the value that the function $g$ takes at $x$, that is, $h(x)=f(g(x))$. Of course, the order of $f$ and $g$ is important. In short, we also say that $h(x)$ is the function of $g$ in $f$. Prove that if a function is a convex and increasing function of a convex function, then it is itself a convex function.
