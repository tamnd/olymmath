---
tag: FYV55241KC
kind: problem
appearances:
  - at: pumac/2011/ca7
    primary: true
  - at: pumac/2011/cb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920834
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7034
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At the start of the PUMaC opening ceremony in McCosh auditorium, the speaker counts $90$ people in the audience. Every minute afterwards, either one person enters the auditorium (due to waking up late) or leaves (in order to take a dreadful math contest). The speaker observes that in this time, exactly $100$ people enter the auditorium, $100$ leave, and $100$ was the largest audience size he saw. Find the largest integer $m$ such that $2^m$ divides the number of different possible sequences of entries and exits given the above information.
