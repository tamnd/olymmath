---
tag: JJ9TMEMYE3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Union of Volleyball Teams. The best volleyball teams form a union that organizes seasonal matches; each team plays once against any other. It may happen that one of the teams wins all the others, but this is not necessarily the case. Therefore, let's agree to call a champion a team that has defeated any other team either directly or indirectly, i.e., through a third team. In other words, we will consider that team $A$ has defeated team $B$ if there is a team $C$ that lost to team $A$ but won against team $B$. However, we will not consider a team $A$ to have indirectly defeated team $B$ if $A$ defeats $C$, $C$ defeats $D$, and $D$ defeats $B$.

Prove that 1) the matches in the unions always allow identifying one or more champions; 2) the team that has directly won the most matches is always a champion.
