---
tag: KKTRYG7CR1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2003
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
Pablo was trying to solve the following problem: find the sequence $\mathrm{x}_{0}, \mathrm{x}_{1}, \mathrm{x}_{2}, \ldots, \mathrm{x}_{2003}$ which satisfies $\mathrm{x}_{0}=1,0 \leq \mathrm{x}_{\mathrm{i}} \leq 2 \mathrm{x}_{\mathrm{i}-1}$ for $1 \leq \mathrm{i} \leq 2003$ and which maximises $\mathrm{S}$. Unfortunately he could not remember the expression for $\mathrm{S}$, but he knew that it had the form $\mathrm{S}= \pm \mathrm{x}_{1} \pm \mathrm{x}_{2} \pm \ldots \pm \mathrm{x}_{2002}$ $+\mathrm{x}_{2003}$. Show that he can still solve the problem.
