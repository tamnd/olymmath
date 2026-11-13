---
tag: G8G38BFSPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Abels Math Contest (Norwegian MO) Final
    url: https://artofproblemsolving.com/community/c6h1909183
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12135
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214036
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2015
    source: hf-ai-mo-aops
    label: 2015 Abels Math Contest (Norwegian MO) Final
---
King Arthur is placing $a + b + c$ knights around a table. $a$ knights are dressed in red, $b$ knights are dressed in brown, and $c$ knights are dressed in orange.
Arthur wishes to arrange the knights so that no knight is seated next to someone dressed in the same colour as himself. Show that this is possible if, and only if, there exists a triangle whose sides have lengths $a +\frac12, b +\frac12$ , and $c +\frac12$
