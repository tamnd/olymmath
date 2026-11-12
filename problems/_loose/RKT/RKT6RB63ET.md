---
tag: RKT6RB63ET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h3164395
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2021
    source: hf-ai-mo-aops
    label: 2021 BMT
---
Shivani has a single square with vertices labeled $ABCD$ . She is able to perform the following transformations: $\bullet$ She does nothing to the square. $\bullet$ She rotates the square by $90$ , $180$ , or $270$ degrees. $\bullet$ She reflects the square over one of its four lines of symmetry.
For the first three timesteps, Shivani only performs reflections or does nothing. Then for the next three timesteps, she only performs rotations or does nothing. She ends up back in the square's original configuration. Compute the number of distinct ways she could have achieved this.
