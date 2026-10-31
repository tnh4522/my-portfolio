import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  PERSONAL,
  EXPERIENCES,
  PROJECTS,
  SKILLS,
  AWARDS,
  LANGUAGES,
  CERTIFICATIONS,
} from '../lib/data';

describe('Portfolio Data Integrity', () => {
  it('should have valid personal info', () => {
    assert.ok(PERSONAL.name, 'Name should not be empty');
    assert.ok(PERSONAL.role, 'Role should not be empty');
    assert.match(PERSONAL.email, /^[\w.-]+@[\w.-]+\.\w+$/, 'Valid email address');
    assert.ok(PERSONAL.skill.length > 0, 'Should list primary skills');
    assert.ok(PERSONAL.github.startsWith('https://github.com/'), 'Valid GitHub profile');
    assert.ok(PERSONAL.linkedin.startsWith('https://www.linkedin.com/'), 'Valid LinkedIn profile');
  });

  it('should have well-formed experience entries', () => {
    assert.ok(EXPERIENCES.length > 0, 'Experiences list should not be empty');
    for (const exp of EXPERIENCES) {
      assert.ok(exp.role, 'Experience should have a role');
      assert.ok(exp.company, 'Experience should have a company');
      assert.ok(exp.period, 'Experience should have a period');
      assert.ok(exp.bullets.length > 0, 'Experience should have bullet points');
      if (exp.techStack) {
        assert.ok(exp.techStack.length > 0, 'Experience tech stack should have items if defined');
      }
    }
  });

  it('should have valid projects with required metadata', () => {
    assert.ok(PROJECTS.length > 0, 'Projects list should not be empty');
    for (const proj of PROJECTS) {
      assert.ok(proj.id, 'Project should have a unique id');
      assert.ok(proj.title, 'Project should have a title');
      assert.ok(proj.description, 'Project should have a description');
      assert.ok(proj.tags.length > 0, 'Project should have at least one tag');
    }
  });

  it('should have properly structured skill categories', () => {
    assert.ok(SKILLS.length > 0, 'Should have skill categories');
    for (const cat of SKILLS) {
      assert.ok(cat.category, 'Skill category should have a name');
      assert.ok(cat.items.length > 0, 'Skill category should contain skill items');
    }
  });

  it('should have awards, certifications and languages defined', () => {
    assert.ok(AWARDS.length > 0, 'Should have awards');
    assert.ok(LANGUAGES.length > 0, 'Should have languages');
    assert.ok(CERTIFICATIONS.length > 0, 'Should have certifications');
    for (const award of AWARDS) {
      assert.ok(award.title, 'Award should have a title');
      assert.ok(award.prize, 'Award should have a prize');
    }
  });
});
