---
tag: 9FDK0S32GG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Zij $n>1$ een geheel getal. Op een rij staan $n$ dozen, en we hebben $n+1$ identieke stenen. Een verdeling is een manier om de stenen over de dozen te verdelen, waarbij elke steen in precies één doos zit. We zeggen dat twee van zulke verdelingen zich op een steenworp afstand van elkaar bevinden als we de ene verdeling uit de andere kunnen verkrijgen door precies één steen te verplaatsen naar een andere doos. De gezelligheid van een verdeling $a$ is gedefinieerd als het aantal verdelingen dat zich op een steenworp afstand van $a$ bevindt. Bepaal de gemiddelde gezelligheid over alle mogelijke verdelingen.
(Twee verdelingen zijn hetzelfde als er in de $i$-de doos van beide rijen evenveel stenen zitten, voor alle $i \in\{1,2, \ldots, n\}$.)

Antwoord. $\frac{n^{2}-1}{2}$
In de oplossingen hieronder noemen we twee verdelingen buren als ze op een steenworp afstand van elkaar liggen.
