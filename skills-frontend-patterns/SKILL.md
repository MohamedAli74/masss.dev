---
name: frontend-patterns
description: Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices.
origin: ECC
---

# Frontend Development Patterns

Modern frontend patterns for React, Next.js, and performant user interfaces.

## When to Activate

- Building React components (composition, props, rendering)
- Managing state (useState, useReducer, Zustand, Context)
- Implementing data fetching (SWR, React Query, server components)
- Optimizing performance (memoization, virtualization, code splitting)
- Working with forms (validation, controlled inputs, Zod schemas)
- Handling client-side routing and navigation
- Building accessible, responsive UI patterns

## Component Patterns

### Composition Over Inheritance

```typescript
// ✅ GOOD: Component composition
interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'outlined'
}

export function Card({ children, variant = 'default' }: CardProps) {
  return <div className={`card card-${variant}`}>{children}</div>
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="card-header">{children}</div>
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="card-body">{children}</div>
}

// Usage
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
</Card>
```

### Compound Components

```typescript
interface TabsContextValue {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

export function Tabs({ children, defaultTab }: {
  children: React.ReactNode
  defaultTab: string
}) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  )
}

export function TabList({ children }: { children: React.ReactNode }) {
  return <div className="tab-list">{children}</div>
}

export function Tab({ id, children }: { id: string, children: React.ReactNode }) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('Tab must be used within Tabs')

  return (
    <button
      className={context.activeTab === id ? 'active' : ''}
      onClick={() => context.setActiveTab(id)}
    >
      {children}
    </button>
  )
}

// Usage
<Tabs defaultTab="overview">
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="details">Details</Tab>
  </TabList>
</Tabs>
```

### Render Props Pattern

```typescript
interface DataLoaderProps<T> {
  url: string
  children: (data: T | null, loading: boolean, error: Error | null) => React.ReactNode
}

export function DataLoader<T>({ url, children }: DataLoaderProps<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return <>{children(data, loading, error)}</>
}

// Usage
<DataLoader<Market[]> url="/api/markets">
  {(markets, loading, error) => {
    if (loading) return <Spinner />
    if (error) return <Error error={error} />
    return <MarketList markets={markets!} />
  }}
</DataLoader>
```

## Custom Hooks Patterns

### State Management Hook

```typescript
export function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue(v => !v)
  }, [])

  return [value, toggle]
}

// Usage
const [isOpen, toggleOpen] = useToggle()
```

### Async Data Fetching Hook

```typescript
interface UseQueryOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
  enabled?: boolean
}

export function useQuery<T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: UseQueryOptions<T>
) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const result = await fetcher()
      setData(result)
      options?.onSuccess?.(result)
    } catch (err) {
      const error = err as Error
      setError(error)
      options?.onError?.(error)
    } finally {
      setLoading(false)
    }
  }, [fetcher, options])

  useEffect(() => {
    if (options?.enabled !== false) {
      refetch()
    }
  }, [key, refetch, options?.enabled])

  return { data, error, loading, refetch }
}

// Usage
const { data: markets, loading, error, refetch } = useQuery(
  'markets',
  () => fetch('/api/markets').then(res => res.json()),
  { onSuccess: (data) => console.log('Markets loaded:', data) }
)
```

## State Management Patterns

### Context + Reducer for Complex State

```typescript
interface StateValue {
  count: number
  history: number[]
}

interface Action {
  type: 'INCREMENT' | 'DECREMENT' | 'RESET'
}

const initialState: StateValue = { count: 0, history: [] }

function reducer(state: StateValue, action: Action): StateValue {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1, history: [...state.history, state.count + 1] }
    case 'DECREMENT':
      return { ...state, count: state.count - 1, history: [...state.history, state.count - 1] }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export function useCounterContext() {
  const context = useContext(CounterContext)
  if (!context) throw new Error('useCounterContext must be within provider')
  return context
}
```

## Performance Patterns

### useMemo for Expensive Computations

```typescript
export function PriceList({ items, sortBy }: { items: Item[], sortBy: 'price' | 'name' }) {
  const sorted = useMemo(() => {
    return items.sort((a, b) => sortBy === 'price' ? a.price - b.price : a.name.localeCompare(b.name))
  }, [items, sortBy])

  return <>{sorted.map(item => <div key={item.id}>{item.name}</div>)}</>
}
```

### useCallback for Event Handlers

```typescript
export function Button({ onClick, label }: { onClick: () => void, label: string }) {
  const handleClick = useCallback(() => {
    onClick()
  }, [onClick])

  return <button onClick={handleClick}>{label}</button>
}
```

## Form Patterns

### Controlled Input Component

```typescript
export function SearchInput() {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
  )
}
```

### Form Validation Hook

```typescript
export function useForm<T extends Record<string, any>>(
  initialValues: T,
  onSubmit: (values: T) => Promise<void>
) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Partial<T>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await onSubmit(values)
    } catch (err) {
      const error = err as Error
      setErrors(prev => ({ ...prev, submit: error.message }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return { values, errors, isSubmitting, handleChange, handleSubmit }
}
```

## Accessibility Patterns

### ARIA Attributes for Dynamic Content

```typescript
export function Alert({ message, isVisible }: { message: string, isVisible: boolean }) {
  return (
    <div
      role="alert"
      aria-live="polite"
      aria-hidden={!isVisible}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      {message}
    </div>
  )
}
```

### Keyboard Navigation Hook

```typescript
export function useKeyboardNavigation(items: string[], onSelect: (item: string) => void) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        setActiveIndex(i => (i + 1) % items.length)
        break
      case 'ArrowUp':
        setActiveIndex(i => (i - 1 + items.length) % items.length)
        break
      case 'Enter':
        onSelect(items[activeIndex])
        break
    }
  }, [items, activeIndex, onSelect])

  return { activeIndex, handleKeyDown }
}
```
