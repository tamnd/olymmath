---
tag: ETV4F3D4HD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On considère un tableau de taille $2018 \times 2018$ dont chaque case contient un entier naturel non nul. Noémie modifie ces entiers à sa guise, en appliquant les opérations suivantes :
$\triangleright$ choisir une ligne puis multiplier par 2 tous les entiers contenus dans cette ligne;
$\triangleright$ choisir une colonne puis soustraire 1 à tous les entiers contenus dans cette colonne.
Montrer que, en appliquant ces opérations, Noémie peut se débrouiller pour obtenir un tableau dont chaque case contient l'entier 0.
