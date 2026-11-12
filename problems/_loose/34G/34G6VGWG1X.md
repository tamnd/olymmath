---
tag: 34G6VGWG1X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h520361
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6510
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-ai-mo-aops
    label: 2011 Harvard-MIT Mathematics Tournament
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
Let $z = \cos \frac{2\pi}{2011} + i\sin \frac{2\pi}{2011}$ , and let $$ P(x) = x^{2008} + 3x^{2007} + 6x^{2006} + \cdots + \frac{2008 \cdot 2009}{2} x + \frac{2009 \cdot 2010}{2} $$ for all complex numbers $x$ . Evaluate $P(z)P(z^2)P(z^3) \cdots P(z^{2010})$ .
