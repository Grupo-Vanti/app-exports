import { type AllowedResourceType } from 'App'
import { type ExportFormValues } from 'AppForm'
import { showResourceNiceName } from '#data/resources'
import {
  Spacer,
  Button,
  ListItem,
  HookedInputSimpleSelect,
  HookedInputSwitch,
  Section,
  HookedForm
} from '@commercelayer/app-elements'
import { RelationshipSelector } from './RelationshipSelector'
import { useForm } from 'react-hook-form'

interface Props {
  resourceType: AllowedResourceType
  isLoading?: boolean
  defaultValues: ExportFormValues
  onSubmit: (values: ExportFormValues) => void
}

export function Form({
  isLoading,
  resourceType,
  defaultValues,
  onSubmit
}: Props): JSX.Element {
  const methods = useForm<ExportFormValues>({
    defaultValues
  })

  return (
    <HookedForm {...methods} onSubmit={onSubmit}>
      <Spacer bottom='14'>
        <RelationshipSelector resourceType={resourceType} />
      </Spacer>

      <Spacer bottom='14'>
        <Section title='More options' titleSize='small'>
          <ListItem tag='div'>
            <HookedInputSwitch
              id='toggle-cleanup'
              inline
              label='Dry data'
              hint={{
                text: 'Enable this flag to make the data importable.'
              }}
              name='dryData'
            />
          </ListItem>
          <ListItem tag='div'>
            <HookedInputSimpleSelect
              id='format'
              label='Format'
              hint={{
                text: 'Select the format of the exported data.'
              }}
              name='format'
              options={[
                {
                  label: 'CSV',
                  value: 'csv'
                },
                {
                  label: 'JSON',
                  value: 'json'
                }
              ]}
              inline
            />
          </ListItem>
        </Section>
      </Spacer>

      <Button variant='primary' type='submit' disabled={isLoading}>
        {isLoading === true
          ? 'Exporting...'
          : `Export ${showResourceNiceName(resourceType).toLowerCase()}`}
      </Button>
    </HookedForm>
  )
}
