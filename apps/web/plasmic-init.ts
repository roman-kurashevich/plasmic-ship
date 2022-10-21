import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';

import {
  Button as ButtonMantine,
} from '@mantine/core';
import { Link, Table } from 'components';
import { DatePicker as DatePickerMantine } from '@mantine/dates';

// import { registerComponent } from '@plasmicapp/host';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'ph1WL4Cxb3ZK7yQC6LjnPo', // ID of a project you are using
      token: 'IeWP1n5PtQnDYq3uJBwXFmjbS1ZKjt8sFmXwSgb9XlCzQPZO2FhbpoTHg41r1LFgIAO8ZweP0sjv9HzA3w', // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(DatePickerMantine, {
  name: 'DatePickerMantine',
  props: {
    allowFreeInput: {
      type: 'boolean',
      defaultValue: false,
    },
    allowLevelChange: {
      type: 'boolean',
      defaultValue: false,
    },
    amountOfMonths: {
      type: 'number',
      defaultValue: 1,
    },
    clearButtonLabel: {
      type: 'string',
      defaultValue: 'clear',
    },
    clearable: {
      type: 'boolean',
      defaultValue: true,
    },
    closeCalendarOnChange: {
      type: 'boolean',
      defaultValue: true,
    },
    defaultValue: {
      type: 'object',
      defaultValue: new Date(),
    },
    description: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Enter description',
        },
      ],
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    dropdownPosition: {
      type: 'choice',
      options: ['flip', 'bottom-start', 'top-start'],
      defaultValue: 'top-start',
    },
    dropdownType: {
      type: 'choice',
      options: ['modal', 'popover'],
      defaultValue: 'popover',
    },
    error: {
      type: 'slot',
    },
    excludeDate: {
      type: 'code',
      lang: 'javascript',
    },
    firstDayOfWeek: {
      type: 'choice',
      options: ['sunday', 'monday'],
      defaultValue: 'monday',
    },
    fixOnBlur: {
      type: 'boolean',
      defaultValue: true,
    },
    focusable: {
      type: 'boolean',
      defaultValue: false,
    },
    fullWidth: {
      type: 'boolean',
      defaultValue: false,
    },
    hideOutsideDates: {
      type: 'boolean',
      defaultValue: true,
    },
    hideWeekdays: {
      type: 'boolean',
      defaultValue: false,
    },
    icon: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Add icon...',
        },
      ],
    },
    iconWidth: {
      type: 'number',
      defaultValue: 30,
    },
    initialLevel: {
      type: 'choice',
      options: ['date', 'month', 'year'],
      defaultValue: 'month',
    },
    label: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Add label...',
        },
      ],
    },
  },

});

PLASMIC.registerComponent(ButtonMantine, {
  name: 'ButtonMantine',
  props: {
    children: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Mantine Button from Ship project',
        },
      ],
    },
    color: {
      type: 'choice',
      options: [
        'dark',
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'green',
        'lime',
        'yellow',
        'orange',
        'teal',
      ],
      defaultValue: 'dark',
    },
    compact: {
      type: 'boolean',
      defaultValue: false,
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    fullWidth: {
      type: 'boolean',
      defaultValue: false,
    },
    loaderPosition: {
      type: 'choice',
      options: ['left', 'right'],
      defaultValue: 'left',
    },
    loading: {
      type: 'boolean',
      defaultValue: false,
    },
    radius: {
      type: 'number',
      defaultValue: 5,
    },
    size: {
      type: 'choice',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    type: {
      type: 'choice',
      options: ['button', 'reset', 'submit'],
      defaultValue: 'button',
    },
    uppercase: {
      type: 'boolean',
      defaultValue: false,
    },
    variant: {
      type: 'choice',
      options: ['outline', 'white', 'light', 'default', 'filled', 'subtle', 'gradient'],
      defaultValue: 'filled',
    },
  },
});

PLASMIC.registerComponent(Link, {
  name: 'LinkShip',
  props: {
    children: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Add content...',
        },
      ],
    },
    type: {
      type: 'choice',
      options: ['url', 'router'],
      defaultValue: 'url',
    },
    href: {
      type: 'string',
      defaultValue: '#',
    },
    size: {
      type: 'choice',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    align: {
      type: 'choice',
      options: ['left', 'center', 'right', 'justify'],
      defaultValue: 'center',
    },
    icon: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Add icon...',
        },
      ],
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    inNewTab: {
      type: 'boolean',
      defaultValue: true,
    },
    underline: {
      type: 'boolean',
      defaultValue: true,
    },
    inherit: {
      type: 'boolean',
      defaultValue: false,
    },
  },
});

PLASMIC.registerComponent(Table, {
  name: 'TableShip',
  props: {
    data: {
      type: 'object',
      defaultValue: [1, 2, 3, 4, 5, 6],
    },
    columns: {
      type: 'object',
      defaultValue: [1, 2, 3],
    },
    perPage: {
      type: 'number',
      defaultValue: 5,
    },
  },
});
