import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from '@storybook/react';
import * as projectAnnotations from './preview';
// src/setupTests.ts
import '@testing-library/jest-dom';


setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);